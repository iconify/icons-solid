import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al0fg069v.css';
import '../../css/x/x1_ejpb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="al0fg069v"/><path class="x1_ejpb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:hjson"} {...others} />);
}

export default Component;
