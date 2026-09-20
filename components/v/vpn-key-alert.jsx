import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eq6u-nbmy {
  fill: currentColor;
  d: path("M7 14q.825 0 1.413-.587T9 12t-.587-1.412T7 10t-1.412.588T5 12t.588 1.413T7 14m14.288 3.713Q21 17.425 21 17t.288-.712T22 16t.713.288T23 17t-.288.713T22 18t-.712-.288M21 14V9h2v5zM7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.138T12.65 10H19v8h-2v-4h-4.35q-.6 1.725-2.113 2.863T7 18");
}
</style><path class="eq6u-nbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vpn-key-alert"} {...others} />);
}

export default Component;
