import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tbo9cf8pi {
  fill: currentColor;
  d: path("M9.3951 3.512L1.3976 17.5119C1.1387 17.9651 1.0025 18.4781 1.0025 19C1.0025 20.6569 2.3457 22 4.0025 22L19.9975 22C21.6543 22 22.9975 20.6569 22.9975 19C22.9975 18.4781 22.8613 17.9651 22.6024 17.5119L14.6049 3.512C14.0709 2.577 13.0767 2 12 2C10.9233 2 9.9291 2.577 9.3951 3.512ZM7.9921 10L16.0079 10L18.2929 14L5.7071 14L7.9921 10Z");
}
</style><path class="tbo9cf8pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-pyramid-fill"} {...others} />);
}

export default Component;
