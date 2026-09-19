import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.c526wmb6z {
  fill: var(--svg-color--ffce31, #ffce31);
  d: path("m44.5 2l-9 2.5L29.4 2l-9.9 34.4h10.4L20.8 62l22.4-34.4H29.7z");
}
</style><path class="c526wmb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:high-voltage"} {...others} />);
}

export default Component;
