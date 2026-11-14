import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i34x9zias {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7q0-2.75 2.75-2.75h4.5q.149 0 .287.057t.243.163l1.781 1.78H19q2.75 0 2.75 2.75v8q0 2.75-2.75 2.75H5q-2.75 0-2.75-2.75zm6.255 2.411Q7.5 10.622 7.5 12.25t1.005 2.839q.015.126.07.239t.145.202t.202.145t.239.07Q10.372 16.75 12 16.75t2.839-1.005q.126-.015.239-.07t.202-.145t.145-.202t.07-.239Q16.5 13.878 16.5 12.25t-1.005-2.839q-.015-.126-.07-.239t-.145-.202t-.202-.145t-.239-.07Q13.628 7.75 12 7.75T9.161 8.755q-.126.015-.239.07t-.202.145t-.145.202t-.07.239");
}
</style><path class="i34x9zias"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:vault-documents"} {...others} />);
}

export default Component;
