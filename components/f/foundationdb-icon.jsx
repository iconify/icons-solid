import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":123.59};
const content = `<style>.g6xeljk4g {
  fill: var(--svg-color--9acefe, #9acefe);
  d: path("m107.027 43.905l54.103-16.417V0L256 38.942v23.671l-94.87-26.725l-54.103 14.889z");
}

.kj3c_jb3h {
  fill: var(--svg-color--0073e0, #0073e0);
  d: path("M0 123.59v-6.764h53.686V89.337l53.341 5.346v22.143h54.103V89.337L256 99.264v24.326z");
}

.tnh11cbpl {
  fill: var(--svg-color--289dfc, #289dfc);
  d: path("M0 80.169L53.686 72.3V44.812l53.341 13.219v22.144L161.13 72.3V44.812L256 68.721v24.434l-94.87-13.219l-54.103 7.111l-53.341-7.111L0 87.042z");
}
</style><path class="kj3c_jb3h"/><path class="tnh11cbpl"/><path class="g6xeljk4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:foundationdb-icon"} {...others} />);
}

export default Component;
