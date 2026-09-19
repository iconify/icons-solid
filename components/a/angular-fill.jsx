import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpxx19b4u.css';
import '../../css/b/bq2iq2bed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wpxx19b4u"/><path class="bq2iq2bed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:angular-fill"} {...others} />);
}

export default Component;
