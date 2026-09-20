import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eumvyw40q.css';
import '../../css/o/ola1aj4br.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eumvyw40q"/><path class="ola1aj4br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:barcode-bold"} {...others} />);
}

export default Component;
