import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozgt7tt7d.css';
import '../../css/r/rhx5tab9t.css';
import '../../css/l/l49vyab9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ozgt7tt7d"/><path class="rhx5tab9t"/><path clip-rule="evenodd" class="l49vyab9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-2-outline"} {...others} />);
}

export default Component;
