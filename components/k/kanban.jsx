import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3scabq7d {
  width: 4px;
  height: 8.5px;
  x: 17px;
  y: 3px;
  rx: 1.5px;
}

.b90xpb3rx {
  width: 4px;
  height: 18px;
  x: 10px;
  y: 3px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qb3606bui {
  width: 4px;
  height: 13px;
  x: 3px;
  y: 3px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="qb3606bui"/><rect class="b90xpb3rx"/><rect class="a3scabq7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kanban"} {...others} />);
}

export default Component;
