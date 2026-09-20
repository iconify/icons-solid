import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-fsf2rdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a-fsf2rdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-align-offset-bottom-fill"} {...others} />);
}

export default Component;
