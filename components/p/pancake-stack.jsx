import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8-w7xbus {
  width: 17.5px;
  height: 4.25px;
  x: 3.25px;
  y: 15.5px;
  rx: 1.75px;
}

.c5anl4bol {
  width: 4px;
  height: 3px;
  x: 12.25px;
  y: 4.25px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcr9s3t6e {
  width: 15.5px;
  height: 4.25px;
  x: 4.25px;
  y: 7.25px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="c5anl4bol"/><rect class="vcr9s3t6e"/><rect class="a8-w7xbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pancake-stack"} {...others} />);
}

export default Component;
