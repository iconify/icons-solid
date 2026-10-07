import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtqw0m_db.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gtqw0m_db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nextcloud"} {...others} />);
}

export default Component;
