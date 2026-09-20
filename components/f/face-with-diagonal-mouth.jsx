import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.k5fwsnbxi {
  cx: 11.5px;
  cy: 15.5px;
  fill: var(--svg-color--65471b, #65471b);
  rx: 2.5px;
  ry: 3.5px;
}

.kd-xqr-fh {
  fill: var(--svg-color--65471b, #65471b);
  d: path("m11.209 27.978l14-3a1.001 1.001 0 0 0-.419-1.957l-14 3a1.001 1.001 0 0 0 .419 1.957");
}

.ngpmpqbbo {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18");
}

.tka410_nv {
  cx: 24.5px;
  cy: 15.5px;
  fill: var(--svg-color--65471b, #65471b);
  rx: 2.5px;
  ry: 3.5px;
}
</style><path class="ngpmpqbbo"/><ellipse class="k5fwsnbxi"/><ellipse class="tka410_nv"/><path class="kd-xqr-fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:face-with-diagonal-mouth"} {...others} />);
}

export default Component;
