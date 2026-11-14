import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fl1d8figg {
  d: path("M2.5 12a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0Z");
}

.jr8el6bas {
  d: path("M7.25 20.25a9.5 3.5 120 1 1 9.5-16.5a9.5 3.5 120 1 1-9.5 16.5M12 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyjc_m-sx {
  d: path("M16.75 20.25a9.5 3.5 60 1 1-9.5-16.5a9.5 3.5 60 1 1 9.5 16.5");
}
</style><g class="ulnmmdpxh"><path class="fl1d8figg"/><path class="wyjc_m-sx"/><path class="jr8el6bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:element-actinium"} {...others} />);
}

export default Component;
