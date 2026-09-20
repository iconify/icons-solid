import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.tkqt_0b0n {
  fill: var(--svg-color--c60c30, #c60c30);
  d: path("M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.xuph2qbqs {
  fill: var(--svg-color--002664, #002664);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}

.yc4aorh9m {
  fill: var(--svg-color--fecb00, #fecb00);
  d: path("M12 5h12v26H12z");
}
</style><path class="xuph2qbqs"/><path class="yc4aorh9m"/><path class="tkqt_0b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-chad"} {...others} />);
}

export default Component;
