import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2--ctuld {
  fill: currentColor;
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1C18.0751 1 23 5.9249 23 12ZM7 9.5L7 11.5L11 11.5L11 9.5L7 9.5ZM13 9.5L13 11.5L17 11.5L17 9.5L13 9.5ZM8 15L8 17L16 17L16 15L8 15Z");
}
</style><path class="g2--ctuld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:face-expressionless-sharp-fill"} {...others} />);
}

export default Component;
