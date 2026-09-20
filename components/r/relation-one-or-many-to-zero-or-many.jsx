import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stpj4mbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="stpj4mbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-one-or-many-to-zero-or-many"} {...others} />);
}

export default Component;
