import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui6oo4bhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ui6oo4bhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:magnify-minus-outline"} {...others} />);
}

export default Component;
