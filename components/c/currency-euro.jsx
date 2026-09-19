import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lezz7hbxw.css';
import '../../css/b/b4p59kwgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer lezz7hbxw"/><path class="b4p59kwgz duoicon-primary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:currency-euro"} {...others} />);
}

export default Component;
