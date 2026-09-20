import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm_eqbcto.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jm_eqbcto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sofa"} {...others} />);
}

export default Component;
