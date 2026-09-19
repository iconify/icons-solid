import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wk-lqi1jh {
  fill: currentColor;
  d: path("M20 12V6H4v12h10v2H2V4h20v8zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m-4.34-6H9v5.66l2.12-2.12l2.83 2.83l1.41-1.41l-2.83-2.83z");
}
</style><path class="wk-lqi1jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-pin-end"} {...others} />);
}

export default Component;
