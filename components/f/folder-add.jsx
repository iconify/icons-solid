import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl4404x2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xl4404x2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-add"} {...others} />);
}

export default Component;
