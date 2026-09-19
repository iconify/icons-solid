import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a3775fcug {
  width: 37px;
  height: 7.115px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.axsrnsb9f {
  width: 15.654px;
  height: 7.115px;
  x: 26.846px;
  y: 20.442px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.rv3eaqblf {
  width: 15.654px;
  height: 7.115px;
  x: 26.846px;
  y: 35.385px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.v0nk71noh {
  width: 15.654px;
  height: 7.115px;
  x: 5.5px;
  y: 35.385px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.w68cic5fs {
  width: 15.654px;
  height: 7.115px;
  x: 5.5px;
  y: 20.442px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}
</style><rect class="a3775fcug"/><rect class="v0nk71noh"/><rect class="w68cic5fs"/><rect class="rv3eaqblf"/><rect class="axsrnsb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:meu-tim"} {...others} />);
}

export default Component;
