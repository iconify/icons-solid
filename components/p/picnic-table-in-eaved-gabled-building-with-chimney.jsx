import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-nz38byv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="x-nz38byv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:picnic-table-in-eaved-gabled-building-with-chimney"} {...others} />);
}

export default Component;
