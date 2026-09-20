import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.rgmvpz51g {
  fill: var(--svg-color--ffac33, #ffac33);
  d: path("M32.938 15.651A1 1 0 0 0 32 15H19.925L26.89 1.458A1 1 0 0 0 26 0a1 1 0 0 0-.653.243L18 6.588L3.347 19.243A1 1 0 0 0 4 21h12.075L9.11 34.542A1 1 0 0 0 10 36a1 1 0 0 0 .653-.243L18 29.412l14.653-12.655a1 1 0 0 0 .285-1.106");
}
</style><path class="rgmvpz51g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:high-voltage"} {...others} />);
}

export default Component;
