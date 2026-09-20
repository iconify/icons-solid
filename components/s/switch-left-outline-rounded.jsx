import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3ql-ib7l {
  fill: currentColor;
  d: path("M9.192 16.35q-.142 0-.288-.056q-.146-.055-.277-.186l-3.543-3.542q-.13-.131-.183-.268q-.053-.136-.053-.298t.053-.298t.183-.267l3.543-3.543q.13-.13.277-.186q.146-.056.288-.056q.304 0 .556.22t.252.594v7.073q0 .373-.252.593t-.556.22m-.077-.994V8.644L5.76 12zm5.693.994q-.304 0-.556-.22T14 15.537V8.464q0-.373.252-.594t.556-.22q.142 0 .288.056t.277.186l3.543 3.543q.13.13.183.267t.053.298t-.053.298t-.183.268l-3.543 3.542q-.13.13-.277.186q-.146.056-.288.056");
}
</style><path class="o3ql-ib7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:switch-left-outline-rounded"} {...others} />);
}

export default Component;
