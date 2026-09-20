import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b892889sj.css';
import '../../css/p/pc0n9-bvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b892889sj"/><path class="pc0n9-bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:computer-chip-core-bold"} {...others} />);
}

export default Component;
