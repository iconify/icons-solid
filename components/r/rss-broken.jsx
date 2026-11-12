import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bwm-xac6u {
  d: path("M4 4C7.1228 4 10.0369 4.8946 12.5 6.4418");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rbfo13byn {
  d: path("M4 12C8.4183 12 12 15.5817 12 20");
}

.si_qr8o_q {
  d: path("M16.5176 9.95459C18.6851 12.7123 19.9999 16.2035 19.9999 19.9999");
}

.xiaawqbyt {
  d: path("M4 20H4.0001");
}
</style><g class="hntgybcog"><path class="xiaawqbyt"/><path class="rbfo13byn"/><path class="bwm-xac6u"/><path class="si_qr8o_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rss-broken"} {...others} />);
}

export default Component;
