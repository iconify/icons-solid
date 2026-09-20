import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmkhx12lh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tmkhx12lh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:semantic-ui-react"} {...others} />);
}

export default Component;
