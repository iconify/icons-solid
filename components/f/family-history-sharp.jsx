import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clj-g92sf {
  fill: currentColor;
  d: path("M9.338 21.413Q8.25 20.325 8.25 18.75q0-1.3.775-2.287T11 15.124V13H5V9H2.5V2h7v7H7v2h10V8.875q-1.2-.35-1.975-1.338T14.25 5.25q0-1.575 1.088-2.662T18 1.5t2.663 1.088T21.75 5.25q0 1.3-.775 2.288T19 8.875V13h-6v2.125q1.2.35 1.975 1.338t.775 2.287q0 1.575-1.088 2.663T12 22.5t-2.662-1.088");
}
</style><path class="clj-g92sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:family-history-sharp"} {...others} />);
}

export default Component;
