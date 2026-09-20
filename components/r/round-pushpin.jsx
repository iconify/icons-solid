import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.han2xbc4v {
  fill: var(--svg-color--99aab5, #99aab5);
  d: path("M14.339 10.725S16.894 34.998 18.001 35s3.66-24.275 3.66-24.275z");
}

.maa75jbqu {
  cx: 18px;
  cy: 8px;
  r: 8px;
  fill: var(--svg-color--dd2e44, #dd2e44);
}

.va8tq_bmb {
  cx: 18px;
  cy: 34.5px;
  fill: var(--svg-color--292f33, #292f33);
  rx: 4px;
  ry: 1.5px;
}
</style><ellipse class="va8tq_bmb"/><path class="han2xbc4v"/><circle class="maa75jbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:round-pushpin"} {...others} />);
}

export default Component;
