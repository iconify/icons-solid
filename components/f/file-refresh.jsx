import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbigfv4ml.css';
import '../../css/b/b7y_ypb6g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pbigfv4ml"/><path class="b7y_ypb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-refresh"} {...others} />);
}

export default Component;
