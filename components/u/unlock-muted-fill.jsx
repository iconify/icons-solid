import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2vuvdbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2vuvdbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:unlock-muted-fill"} {...others} />);
}

export default Component;
