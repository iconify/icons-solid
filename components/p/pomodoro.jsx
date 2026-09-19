import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mm2yyybna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5c2.29 1.88 2.82 5.137 0 6.77c-2.82-1.633-2.29-4.89 0-6.77m5.452 7.684c.061 2.296-3.098 3.497-5.452 2.947c-2.354.55-5.513-.65-5.452-2.947c1.872-1.345 4.219-.233 5.452 2.223c1.233-2.456 3.58-3.568 5.452-2.223m-7.977 5.279c-1.731-.672-2.964-1.527-4.112-1.517C2.153 16.08 3.683 43.5 24 43.5s21.848-27.42 6.638-27.554c-1.156-.01-2.384.84-4.113 1.517c-1.732.679-3.207.715-5.05 0");
}
</style><path class="mm2yyybna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pomodoro"} {...others} />);
}

export default Component;
