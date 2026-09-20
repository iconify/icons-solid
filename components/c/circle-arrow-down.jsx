import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yltk3ebdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yltk3ebdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-arrow-down"} {...others} />);
}

export default Component;
