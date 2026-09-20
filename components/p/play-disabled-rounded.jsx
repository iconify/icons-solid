import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kd3vbq_1b {
  fill: currentColor;
  d: path("m16.45 13.6l-8.1-8.1q.25-.2.575-.238t.625.163l8.125 5.725q.475.3.462.85t-.487.85zm2.6 8.3L13 15.8l-3.45 2.225q-.5.325-1.025.038T8 17.175V10.8L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l16.975 16.975q.3.3.3.713t-.3.712q-.3.275-.712.288t-.713-.288");
}
</style><path class="kd3vbq_1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-disabled-rounded"} {...others} />);
}

export default Component;
