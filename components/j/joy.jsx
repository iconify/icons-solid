import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhd2f7u1l.css';
import '../../css/d/dcvw64xgv.css';
import '../../css/s/scxamt7eq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qhd2f7u1l"/><path class="dcvw64xgv"/><path class="scxamt7eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:joy"} {...others} />);
}

export default Component;
