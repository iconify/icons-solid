import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4cpwgb3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w4cpwgb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:prescription-pills-drugs-healthcare-solid"} {...others} />);
}

export default Component;
