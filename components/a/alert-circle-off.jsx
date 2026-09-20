import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft-5lzbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ft-5lzbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alert-circle-off"} {...others} />);
}

export default Component;
