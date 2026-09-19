import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdhtlqbkg {
  cx: 8px;
  cy: 17px;
  r: 1px;
  fill: currentColor;
}

.da7chunho {
  cx: 16px;
  cy: 20px;
  r: 1px;
  fill: currentColor;
}

.mvbrhwg_a {
  cx: 8px;
  cy: 20px;
  r: 1px;
  fill: currentColor;
}

.oclompb7u {
  cx: 12px;
  cy: 17px;
  r: 1px;
  fill: currentColor;
}

.pav6vtoat {
  cx: 16px;
  cy: 17px;
  r: 1px;
  fill: currentColor;
}

.rewt5h-0h {
  fill: currentColor;
  d: path("M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92");
}

.ry6tsxfog {
  cx: 12px;
  cy: 20px;
  r: 1px;
  fill: currentColor;
}
</style><circle class="cdhtlqbkg"/><circle class="oclompb7u"/><circle class="pav6vtoat"/><path class="rewt5h-0h"/><circle class="mvbrhwg_a"/><circle class="ry6tsxfog"/><circle class="da7chunho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-shower"} {...others} />);
}

export default Component;
