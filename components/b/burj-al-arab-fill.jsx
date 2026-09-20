import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iauax3bdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iauax3bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:burj-al-arab-fill"} {...others} />);
}

export default Component;
