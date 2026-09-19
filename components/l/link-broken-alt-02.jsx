import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyqfzub1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oyqfzub1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:link-broken-alt-02"} {...others} />);
}

export default Component;
