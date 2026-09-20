import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-q6l7u7i {
  fill: var(--svg-color--329afa, #329afa);
  d: path("M3 12.816V3l14.625 15.469a10.3 10.3 0 0 1-4.399 2.402c-.995.225-3.965.376-6.682-1.575C3.827 17.355 3 14.25 3 12.82zm18-1.632V21L6.375 5.531a10.3 10.3 0 0 1 4.399-2.402c.995-.225 3.965-.377 6.682 1.575C20.173 6.645 21 9.75 21 11.18z");
}
</style><path class="e-q6l7u7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ong"} {...others} />);
}

export default Component;
