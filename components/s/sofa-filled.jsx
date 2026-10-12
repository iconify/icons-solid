import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fffgk-bgb.css';
import '../../css/s/s88v5t7cy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fffgk-bgb"/><path class="s88v5t7cy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sofa-filled"} {...others} />);
}

export default Component;
