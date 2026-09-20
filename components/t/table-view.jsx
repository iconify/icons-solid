import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mkzpfebze {
  fill: currentColor;
  d: path("M8 21h5.192v-4.384H6.385v2.769q0 .666.474 1.14Q7.334 21 8 21m6.192 0h5.193q.666 0 1.14-.475t.475-1.14v-2.77h-6.808zM3 17.23V4.617q0-.691.463-1.153T4.615 3h12.616v1H4.616q-.27 0-.443.173T4 4.616V17.23zm3.385-1.614h6.807v-4.424H6.385zm7.807 0H21v-4.424h-6.808zm-7.807-5.424H21V8q0-.666-.475-1.14q-.474-.476-1.14-.476H8q-.666 0-1.14.475q-.476.475-.476 1.141z");
}
</style><path class="mkzpfebze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:table-view"} {...others} />);
}

export default Component;
