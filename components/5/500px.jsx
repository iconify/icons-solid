import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt34fhb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt34fhb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:500px"} {...others} />);
}

export default Component;
