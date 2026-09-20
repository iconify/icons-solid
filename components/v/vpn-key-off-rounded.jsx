import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2l0nf7ga {
  fill: currentColor;
  d: path("M19.075 21.9L12.15 15q-.8 1.35-2.137 2.175T7 18q-2.5 0-4.25-1.75T1 12q0-1.65.8-3.025T3.95 6.8L2.075 4.925q-.3-.3-.3-.713t.3-.712t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3m1.25-4.4l-7.5-7.5H21q.825 0 1.413.588T23 12t-.587 1.413T21 14v2q0 .49-.2.87t-.475.63M7 14q.825 0 1.413-.587T9 12v-.175L7.175 10H7q-.825 0-1.412.588T5 12t.588 1.413T7 14");
}
</style><path class="l2l0nf7ga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vpn-key-off-rounded"} {...others} />);
}

export default Component;
