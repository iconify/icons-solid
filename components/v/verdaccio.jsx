import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmzp2srzw.css';
import '../../css/a/avn_ef2yx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jmzp2srzw"/><path class="avn_ef2yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:verdaccio"} {...others} />);
}

export default Component;
