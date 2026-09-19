import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.nzjivrbpj {
  fill: currentColor;
  d: path("M46.063 2c-6.268 0-11.515 3.598-14.062 8.81C29.452 5.598 24.206 2 17.938 2C9.227 2 2 9.361 2 17.938C2 32.406 32.001 62 32.001 62S62 32.406 62 17.938C62 9.361 54.775 2 46.063 2");
}
</style><path class="nzjivrbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:heart-suit"} {...others} />);
}

export default Component;
