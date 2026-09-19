import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lghk2q9iw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lghk2q9iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:unsorted"} {...others} />);
}

export default Component;
