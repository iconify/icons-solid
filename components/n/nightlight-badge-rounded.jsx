import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.az0a47bdz {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-4q.425 0 .8-.05t.75-.15q.1-.025.3-.375q.025-.125-.037-.25t-.188-.2q-1.2-.8-1.912-2.1T11 12q0-1.575.713-2.875t1.912-2.1q.125-.1.188-.213t.037-.237q-.025-.125-.1-.225t-.2-.15q-.375-.1-.75-.15T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Z");
}
</style><path class="az0a47bdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:nightlight-badge-rounded"} {...others} />);
}

export default Component;
