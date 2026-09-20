import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riomwtb3m.css';
import '../../css/x/xcwrauxib.css';
import '../../css/l/ltwci7nut.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="riomwtb3m"/><path class="xcwrauxib"/><path class="ltwci7nut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:planets"} {...others} />);
}

export default Component;
