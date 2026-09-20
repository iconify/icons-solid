import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cr8mn7b3o {
  fill: currentColor;
  d: path("M6 23v-9H4q-1.05 0-1.775-.725T1.5 11.5t.725-1.775T4 9h2V8H4q-1.05 0-1.775-.725T1.5 5.5t.725-1.775T4 3h2V1h2v2h2q1.05 0 1.775.725T12.5 5.5t-.725 1.775T10 8H8v1h2q1.05 0 1.775.725T12.5 11.5t-.725 1.775T10 14H8v9zm9 0v-2h2v-7.15q-1.325-.35-2.162-1.412T14 10V1h8v9q0 1.375-.837 2.438T19 13.85V21h2v2zm1-17h4V3h-4z");
}
</style><path class="cr8mn7b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tapas-sharp"} {...others} />);
}

export default Component;
