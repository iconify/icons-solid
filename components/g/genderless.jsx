import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxv08ik5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxv08ik5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:genderless"} {...others} />);
}

export default Component;
